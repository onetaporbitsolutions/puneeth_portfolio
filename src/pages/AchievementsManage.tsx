import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addCertificate, deleteCertificate, getUserCertificates, saveUserCertificates, type Certificate } from "@/lib/certStore";

const AchievementsManage = () => {
  const [certs, setCerts] = useState<Certificate[]>(getUserCertificates());
  const [form, setForm] = useState({
    title: "",
    company: "",
    date: "",
    description: "",
    skills: "",
    credentialId: "",
    image: "",
    verifyUrl: "",
  });

  const onAdd = () => {
    const newCert: Certificate = {
      title: form.title.trim(),
      company: form.company.trim(),
      date: form.date.trim(),
      description: form.description.trim(),
      skills: form.skills.split(",").map(s => s.trim()).filter(Boolean),
      credentialId: form.credentialId.trim() || undefined,
      image: form.image.trim(),
      verifyUrl: form.verifyUrl.trim() || undefined,
    };
    addCertificate(newCert);
    const updated = getUserCertificates();
    setCerts(updated);
    setForm({ title: "", company: "", date: "", description: "", skills: "", credentialId: "", image: "", verifyUrl: "" });
  };

  const onDelete = (i: number) => {
    deleteCertificate(i);
    setCerts(getUserCertificates());
  };

  const onExport = () => {
    const blob = new Blob([JSON.stringify(certs, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "certificates.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const onImport = async (file: File) => {
    const text = await file.text();
    const parsed = JSON.parse(text) as Certificate[];
    saveUserCertificates(parsed);
    setCerts(getUserCertificates());
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Manage Certificates</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-2xl space-y-4">
            <h2 className="text-xl font-semibold mb-2">Add Certificate</h2>
            <Input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
            <Input placeholder="Issued by (Company)" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
            <Input placeholder="Date (e.g., 2024 or May 2024)" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
            <Textarea placeholder="Short description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
            <Input placeholder="Skills (comma separated)" value={form.skills} onChange={e => setForm({ ...form, skills: e.target.value })} />
            <Input placeholder="Credential ID (optional)" value={form.credentialId} onChange={e => setForm({ ...form, credentialId: e.target.value })} />
            <Input placeholder="Image URL or Data URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
            <Input placeholder="Verify URL (optional)" value={form.verifyUrl} onChange={e => setForm({ ...form, verifyUrl: e.target.value })} />
            <div className="flex gap-3 pt-2">
              <Button onClick={onAdd} className="rounded-full">Add</Button>
              <Button variant="secondary" className="rounded-full" onClick={onExport}>Export JSON</Button>
              <label className="cursor-pointer">
                <span className="sr-only">Import JSON</span>
                <Input type="file" accept="application/json" onChange={e => e.target.files && onImport(e.target.files[0])} />
              </label>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Your Certificates</h2>
            {certs.length === 0 && <p className="text-muted-foreground">No certificates added yet.</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certs.map((c, i) => (
                <div key={i} className="glass-card p-4 rounded-xl">
                  <div className="aspect-[4/3] bg-secondary/20 mb-3 flex items-center justify-center overflow-hidden rounded-lg">
                    <img src={c.image} alt={c.title} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-muted-foreground">{c.company} • {c.date}</div>
                  <div className="flex justify-end pt-3">
                    <Button variant="destructive" size="sm" onClick={() => onDelete(i)}>Delete</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsManage;


