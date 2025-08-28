import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

// Ortak okuma
async function fetchResumeDocFS(id = 'ahmet-yusuf-polat') {
  const ref = doc(db, 'resumes', id);
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error('Resume document not found');
  return snap.data();
}

// Tüm belge
export async function fetchResumeFS(id = 'ahmet-yusuf-polat') {
  return await fetchResumeDocFS(id);
}

// İstersen ayrı ayrı da kullanabilirsin:
export async function fetchLabelsFS(id = 'ahmet-yusuf-polat') {
  const d = await fetchResumeDocFS(id);
  return d?.labels || null;
}
export async function fetchContactFS(id = 'ahmet-yusuf-polat') {
  const d = await fetchResumeDocFS(id);
  return d?.contact || null;
}
