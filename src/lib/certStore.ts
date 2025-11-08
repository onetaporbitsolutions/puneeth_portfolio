export type Certificate = {
  title: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
  credentialId?: string;
  image: string; // URL or data URL
  verifyUrl?: string;
};

const KEY = "portfolio.userCertificates.v1";

export function getUserCertificates(): Certificate[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function saveUserCertificates(certs: Certificate[]) {
  localStorage.setItem(KEY, JSON.stringify(certs));
}

export function addCertificate(cert: Certificate) {
  const certs = getUserCertificates();
  certs.unshift(cert);
  saveUserCertificates(certs);
}

export function deleteCertificate(index: number) {
  const certs = getUserCertificates();
  certs.splice(index, 1);
  saveUserCertificates(certs);
}


