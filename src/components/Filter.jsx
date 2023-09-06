import { InputList, Label } from './App.styled';
export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Label htmlFor="filter">Find your contacts by name</Label>
      <InputList
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={value}
        onChange={onChange}
        placeholder="Find your contact"
      />
    </>
  );
};
