//useContactAndLabelsFs.js
import { useEffect, useState } from 'react';
import { fetchResumeFS } from '../services/resumeRepo.fs';

export default function useResumeFS(id = 'ahmet-yusuf-polat') {
  const [data, setData] = useState(null);   // tüm belge
  const [loading, setL] = useState(true);
  const [error, setE] = useState(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const d = await fetchResumeFS(id);
        if (alive) { setData(d); setL(false); }
      } catch (e) {
        if (alive) { setE(e); setL(false); }
      }
    })();
    return () => { alive = false; };
  }, [id]);

  return { data, loading, error };
}
