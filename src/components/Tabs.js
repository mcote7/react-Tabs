import React, { useState } from 'react';

const Tabs = () => {

    const [content, setContent] = useState("Select a tab")

    const tab1Handle = (e) => {
        setContent("Tab 1 content - \n\t Lorem Ispum is a choke artist. It chokes! Lorem Ipsum better hope that there are no tapes of our conversations before he starts leaking to the press! He’s not a word hero. He’s a word hero because he was captured. I like text that wasn’t captured. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.");
    }
    const tab2Handle = (e) => {
        setContent("Tab 2 content - \n\t All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected.I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? The best taco bowls are made in Trump Tower Grill. I love Hispanics!");
    }
    const tab3Handle = (e) => {
        setContent("Tab 3 content - \n\t The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. Lorem Ipsum's father was with Lee Harvey Oswald prior to Oswald's being, you know, shot. It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again.");
    }

    return(
        <div className="row">
            <div className="col">
                <div className="row">
                    <button onClick={tab1Handle} className="tabs">Tab 1</button>
                    <button onClick={tab2Handle} className="tabs">Tab 2</button>
                    <button onClick={tab3Handle} className="tabs">Tab 3</button>
                </div>
                <div className="row">
                    <div className="tabinfo">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabs;