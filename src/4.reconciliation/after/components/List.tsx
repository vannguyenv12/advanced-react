function SomeComponent() {
  function Input({ placeholder }: { placeholder: string }) {
    return <input type='text' placeholder={placeholder} />;
  }

  return <Input placeholder='abc' />;
}

export default SomeComponent;
