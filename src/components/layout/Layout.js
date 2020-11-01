import React from 'react';
import Aux from '../../hoc/Auxiliary';
import style from './Layout.module.css';
const layout = (props) =>(
  <Aux>
  <div>Toolbar,SideDrawer, Backdrop</div>
  <main className = {style.Content}>
  {props.children}
  </main>
  </Aux>
);

export default layout;
