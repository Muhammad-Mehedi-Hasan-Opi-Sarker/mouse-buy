import React from 'react';

const Ans = () => {
    return (
        <div>
            <h2>How reat works?</h2>
<h5>
React helps write javascript in html by using special syntax jsx .React works behind the scenes step by step to create DOM.Then in front of our represent webpage .We know javaScript can dom manipulate . dom manipulate is powerful javaScript  ,it could slow webpage for dom manipulation. React A seam to seam creates another dom similar to this browser dom which is called virtual dom. Now this dome looks exactly like the real dome, but this virtual dome is actually a JavaScript object. React builds it in such a way that any element can be modified easily and efficiently using JavaScript with this DOM. React does not create one virtual dom , it creates two virtual Dom . React works two things here by two Dom . When users change their any data two virtual Dom will help for data maintenance.  When the user takes an action in the React app or does something we call a change in the Dome, React puts those changes in one of the two virtual Domes, and the other is in the previous version. Now comparing the new one with the previous one, seeing the reaction, exactly which specific element has been changed. According to him, React does not re-render or re-paint the whole dome but only changes what has been changed.
</h5>
<h2>what is difference between props and state or props vs state ? </h2>
<h5>state:------ <br />
 1.State is limited to current component <br />
2. the state pass of the current component as prop <br />
3.It is mutable. <br />
4.pass it down with props instead <br />
5.State is the local state of the component we cannot be accessed in and modified outside of the component. <br />
6.It depends on local variables in a function. <br />

props:----- <br />
 1.Props can be passed to any component you wish. <br />
2.The props can’t have the current component as state. <br />
3.It is immutable. <br />
4.use this to pass data to child components <br />
5.It is to make components reusable by giving components the ability to receive data from their parent component in the form of props. <br />
6.It is depend to function parameters.
</h5>
        </div>
    );
};

export default Ans;