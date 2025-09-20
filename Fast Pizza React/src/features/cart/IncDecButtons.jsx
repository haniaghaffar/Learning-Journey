import Button from '../../ui/Button';

function IncDecButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button type="small">-</Button>
      <p>1</p>
      <Button type="small">+</Button>
    </div>
  );
}

export default IncDecButtons;
