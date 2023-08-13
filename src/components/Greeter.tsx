import React from "react";

interface GreeterProps{
    person:string;
}
const Greeter = ({person}:GreeterProps) => {
  return (
    <h2>Greet {person}</h2>

)};

export default Greeter;
