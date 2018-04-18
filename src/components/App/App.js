import React, { PureComponent } from 'react';
import './App.css';
import { Card, BigCard, Lede, Headline } from '../Card/Card';
import { Navbar } from '../Navbar/Navbar';
import { Grid } from '../Grid/Grid';
export class App extends PureComponent {

  render() {
    return (  
      <div className="App">
        <Navbar>
          <a className="nav-item nav-link" href="tech">Tech</a>
          <a className="nav-item nav-link" href="dev">Dev</a>
          <a className="nav-item nav-link" href="gaming">Gaming</a>
        </Navbar>
        <BigCard>
          <Headline text="Main Article" />
          <Lede author="Main Author" text="Main lede." />
        </BigCard>
        <Grid numberOfColumns={3}>
          <Card>
            <Headline text="This is the Headline" />
            <Lede author="Jeffy Spaghetti" text="This is the lede." />
          </Card>
          <Card>
            <Headline text="This is the Headline" />
            <Lede author="Jeffy Spaghetti" text="This is the lede." />
          </Card>
          <Card>
            <Headline text="This is the Headline" />
            <Lede author="Jeffy Spaghetti" text="This is the lede." />
          </Card>
          <Card>
            <Headline text="This is the Headline" />
            <Lede author="Jeffy Spaghetti" text="This is the lede." />
          </Card>
          <Card>
            <Headline text="This is the Headline" />
            <Lede author="Jeffy Spaghetti" text="This is the lede." />
          </Card>
          <Card>
            <Headline text="This is the Headline" />
            <Lede author="Jeffy Spaghetti" text="This is the lede." />
          </Card>
          
        </Grid>
     </div>
    );
  }
}