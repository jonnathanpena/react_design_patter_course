import { createRef } from "react";

export const UncrontolledForm =  () => {
  const nameInput = createRef();
  const ageInput = createRef();
  const hairColorInput = createRef();

  const handledSubmit = e => {
    console.log('name', nameInput.current?.value);
    console.log('age', ageInput.current?.value);
    console.log('hairColor', hairColorInput.current?.value);

    e.preventDefault(); 
  };

  return (
    <form onSubmit={handledSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput}/>
      <input name="age" type="number" placeholder="Age" ref={ageInput}/>
      <input name="hairColor" type="text" placeholder="Hair Color" ref={hairColorInput }/>
      <input type="submit" value="Submit" />
    </form>
  );
};