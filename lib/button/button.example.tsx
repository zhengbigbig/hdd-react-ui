import React, {Fragment} from 'react';
import Button from './button';

export default function () {
  const onClick:React.MouseEventHandler = (e) => {
    console.log(1);

  };
  return (
      <Fragment>
        <Button
          color="MediumAquamarine"
          size="small"
          onClick={(e) => {onClick(e);}}
        >MediumAquamarine</Button>
        <Button
          // size="large"
          color="SlateBlue"
          onClick={(e) => {onClick(e);}}
        >SlateBlue</Button>
        <Button
          size="large"
          color="Blue"
          onClick={(e) => {onClick(e);}}
        >Blue</Button>
        <Button
          size="large"
          color="Green"
          onClick={(e) => {onClick(e);}}
        >Green</Button>
        <Button
          size="large"
          color="Orange"
          onClick={(e) => {onClick(e);}}
        >Orange</Button>
        <Button
          size="large"
          color="LightRed"
          onClick={(e) => {onClick(e);}}
        >LightRed</Button>
        <Button
          size="large"
          color="Red"
          onClick={(e) => {onClick(e);}}
        >Red</Button>
        <Button
          size="large"
          color="LightGrey"
          onClick={(e) => {onClick(e);}}
        >LightGrey</Button>
        <Button
          size="large"
          color="Grey"
          onClick={(e) => {onClick(e);}}
        >Grey</Button>
        <Button
          size="large"
          color="Cyan"
          onClick={(e) => {onClick(e);}}
        >Cyan</Button>
        <Button
          size="large"
          color="Orchid"
          onClick={(e) => {onClick(e);}}
        >Orchid</Button>
        <Button
          size="large"
          color="Coffee"
          onClick={(e) => {onClick(e);}}
        >Coffee</Button>
        <Button
          size="large"
          color="Violet"
          onClick={(e) => {onClick(e);}}
        >Violet</Button>
        <Button
          size="large"
          color="Yellow"
          onClick={(e) => {onClick(e);}}
        >Yellow</Button>
        <Button
          size="large"
          color="DarkSlateGray"
          onClick={(e) => {onClick(e);}}
        >DarkSlateGray</Button>
        <Button
          size="large"
          color="Gold"
          onClick={(e) => {onClick(e);}}
        >Gold</Button>
        <Button
          size="large"
          color="Gold"
          disabled={true}
          onClick={(e) => {onClick(e);}}
        >Gold</Button>
        <Button
          size="large"
          color="Gold"
          disabled={false}
          shape="circle"
          onClick={(e) => {onClick(e);}}
        >x</Button>
        <Button
          size="large"
          color="Gold"
          icon='qq'
          disabled={false}
          shape="circle"
          onClick={(e) => {onClick(e);}}
        />
        <Button
          size="large"
          color="Gold"
          icon='qq'
          disabled={false}
          shape="circle"
          href="/abc"
          onClick={(e) => {onClick(e);}}
        />

      </Fragment>
  );
}
