import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

// Webpack is going to automatically look for files that end with .js for u. No need to add it at the end
// so long as it is a JS file that u r trying to import.

// new App component 
// inorder to create resuable configurable components I need to first figure out the following 
    // Identify theJSX  that seems to be duplicated
        //   we want to find and isolate some portion of our application or some JSX that appears to be copy pasted
        // either in a single component or in many places inside of our project 
    // What is the purpose of that block block of JSX? Think of a discriptive name for what it does 
        // We are then going to provide a name for the component we are going to generate  
        //  We are going to take that replicated JSX and put it in a brand new stand alone component. 
        //  It is really important to give it a good name.

        //  the purpose of this JSX is to display a single comment / details about a single comment 
        // Give it the name of Comment detail cause its giving the details of a single comment 

    // Create a new file to house this new component, it should have the same name as the component
        //   to deduplicate the JSX in our application. 
        //  same name of our component 
       
    // Create a new component in the new file, past the JSX next into it
    // Make the new component configurable by using React's "props" system


// Last thing is take this component and use it inside of our app. 
// So we need to tell our app component should show the CommentDetail component 
//    to do so we are going to treat the Commentdetail as though it is a JSX tag 
//    If we want to refer to javascript variables we are going to use those curly braces {ComponentDetal}
//    However components are the one exception to that rule 
//     if we want to show one component inside of another we want to treat it as though it were a JSX tag instead 
//   There is no limit to the number of component we show inside of the other. 
//  we can copy paste the     <CommentDetail />
//  multiple time and see the same thing over and over again because we have fixed info in the component 
//    nOW Our issue is that we have the same repetative issue 



// Prop sytem has two stages 
//   1. Provide information from the parent to the child 
//  2. where the child consumes | makes use of that information 

// Stage 1: Providing information from Parent to Child:
//  this looks similar to adding a className in JSX  
//      <CommentDetail author(name of prop)="sam"(value of prop)/>
// the name is nothing special

//  We are providing them with the same property name but they have different values 
//  this tells us that when u provide a props to a component its always going to a unique version to that component
// & the first prop of Amie is not goin to be shared to any other components 
// each prop is unique and only being passed to this one instance of this commentDetail 

// Now we need to check and see how the child consumes the inforamtion 
// in Comment Deatil we need to somehow get access to that prop we have provided to this compnent 
// that prop is going to show up as a 

const App = () => {
 return (
<div className="ui container comments" > 
<ApprovalCard> 
    <div> 
        <h4>Warning!!!</h4>
        Are you sure you want to log out!
    </div>
</ApprovalCard>

<ApprovalCard> 
    <CommentDetail author="Amie" date="Today at 6pm" comment="Nice Job!" img={faker.image.avatar()}/>
</ApprovalCard>

<ApprovalCard> 
    <CommentDetail author="Sam" date="Today at 3pm" comment="Great!" img={faker.image.avatar()}/>
</ApprovalCard>

<ApprovalCard> 
    <CommentDetail author="Ali" date="Today at 7pm" comment="Oh Woow"img={faker.image.avatar()}/>
</ApprovalCard>

   
</div>
 );
}; 

ReactDOM.render(<App />, document.querySelector('#root'))