import React from "react";
import InterFaceChilsCmp from "./InterFaceChilsCmp";

interface InterFaceParntCmpProps {}

interface InterFaceParntCmpState {
  test: number;
  fristName: string;
  lastName?: string;
}

export default class InterFaceParntCmp extends React.Component<
  InterFaceParntCmpProps,
  InterFaceParntCmpState
> {
  constructor(props: InterFaceParntCmpProps) {
    super(props);
    this.state = {
      test: 1,
      fristName: "Harshal",
      lastName: "shahu",
    };
  }

  myFunction = () => {
    // this.setState({
    //  fristName:this.state.fristName+this.state.lastName,
    // })
  };

  render(): React.ReactNode {
    return (
      <>
        <button onClick={this.myFunction}>Incrimant</button>

        <span>
          <h1>child</h1>
          <InterFaceChilsCmp fristName={this.state.fristName} />
        </span>
      </>
    );
  }
}
