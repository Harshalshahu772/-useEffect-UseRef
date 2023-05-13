import React,{PureComponent}   from "react";
import { useParams } from "react-router-dom";

export const conteactRout = () => {
  let context = useParams();
  console.log("context", context);
  return <Contect></Contect>;
};

export default class Contect extends React.Component<any, any> {
  render(): React.ReactNode {
    return <h1>Contect push </h1>;
  }
}
