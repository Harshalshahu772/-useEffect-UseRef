import React from "react";

interface InterFaceChilsCmpProps {
 
  fristName: string;
}

interface InterFaceChilsCmpState {}

export default class InterFaceChilsCmp extends React.Component<
  InterFaceChilsCmpProps,
  InterFaceChilsCmpState
> {
  constructor(props: InterFaceChilsCmpProps) {
    super(props);
    //this.state={

    //}
  }

  render(): React.ReactNode {
    return (
      <>
        <div>
          <span>
            {this.props.fristName}
          </span>
        </div>
      </>
    );
  }
}

