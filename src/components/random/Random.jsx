import React, { useEffect, useState } from "react";

const Random = () => {
    const [comments , setComments] = useState([
        {id: 1, text: "This is the first comment", reply: [] },
        {id: 2, text: "This is  second comment", reply: [] },
    ])

    const [input, setInput] = useState("");

    const inputHandler = (e)=>{
        let inputText = e.target.value;
        setInput(inputText);
        
    }
    const addComment = (i)=>{
        comments.push({text: input, reply: []})
        console.log(comments);
        setInput("");
    }
    
    const addReply = (i) => {
        const reply = input;
        comments[i].reply.push(reply)
        setInput("");
    }
    return (
        <>
            <div className="h-screen bg-gray-700 text-white text-center">
                <h2 className="text-2xl font-semibold mb-8">Comments Section</h2>
                <div className="comments text-center">

                    <input type="text" name="comment_inp" className="text-black" placeholder="Place a comment" value={input} onChange={inputHandler}/>
                    <br />
                    <button onClick={()=>{addComment(-1)}} className="bg-lime-600 px-2 py-1 rounded-xl mt-2">Add Comment</button>
                    {
                        comments.map((item,i) => (
                            <div className="individual-comment mt-2" key={i}>
                                {item.text} 

                                <button className="bg-green-400 px-1 rounded-full" onClick={()=>{addReply(i)}}>Reply</button>

                                <div className="text-zinc-300">
                                    {
                                        item.reply.map((reply,i)=>(
                                            <li key={i}>
                                            {reply}
                                            </li>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Random