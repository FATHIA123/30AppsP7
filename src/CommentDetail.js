import React from 'react';


// Initially it has a hard coded name,date, and comment content. 
//  Chances are the comment that we want to show is not going to have an identical 
// everything to it
// So everytime we want to show this component we want to customize it when we create the component

// This is what the prop system is about. 
// It allows us to configure how a compnent exactly behaves or the content that it shows 

// we want this component to show inside of our app 
// we want to essentially render the comment detail component inside our app

// how are we going to do that 
// first we need to make sure that CommentDetail is available inside the index.js file
// By default these different variables and components, everything that we  create in different files
// are segmented or silenced off from other files inside other files 
//  there is no connections betweeen these two files. 

//  inorder to form the connection, the commentdetail to show up on inside of index.js, so that we then can use it in App component
//  we need to do these two things 
    //  We are going to add an export statment inside of the commentDetails: this essentially tells
    // the rest of the world "If you want to get assess to the commentDetail, I got u covered"
    // essentially the export statment makes this component available to every other file inside of our project

    // To get assess to the componetDetail, we add an import statement to the index.js file.
    // that is the link both together and make sure that one is connected to the other
    // we are going to hook these two things up 


// Once we get it inside the index file we can render it show it inside of our app. 
// Through Component Nesting. 


// Lets TALK About PROPS 
// Porps system is a system used to passing data from a parent component to a child 
// or a nested component 

// the goal of the prop system is to somehow comunicate data from the parent down to the child
//  with the ultimate goal to custumize the child and making sure that the content it display on the screen 
//  is somehat different or to make sure that the behaviour of the component is different when the user interacts with  it.


// the overall Goal of COMPONENTS 
// IS to either show some content to the user || react to user interaction 
// and the purpose of props is to customize those two things 
//  either customize how the component looks || how the user interacts with it 



const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar"> 
            <img alt="avatar" src={props.img} />
            </a>

            <div className="content" > 
            <a href="/" className="author"> 
            {props.author} 
            </a>

            <div className="metadata">
                <span className="data">{props.date}</span>
            </div>

                <div className="text">{props.comment}</div>
              </div>
     </div>
    
    );
};

export default CommentDetail;