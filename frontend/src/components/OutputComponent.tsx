import React from 'react'
import ReactJson from 'react-json-view';

export default function OutputComponent(props: any) {
  return (
    <div>
      <ReactJson src={props.data} theme='monokai' indentWidth={6} style={{padding: "2rem", fontSize: "18px"}}/>
    </div>
  );
}
