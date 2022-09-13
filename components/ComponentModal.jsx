import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';

export default function ComponentModal() {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div>
      <h1>Comment modale</h1>
      {open && <h1>the model is open</h1>}
    </div>
  );
}
