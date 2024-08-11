import React from 'react'

const Workflow = () => {

    return (
        <div className="workflow">
            <div className="work-p">
                <h1 className="head">
                    Collaborative Learning with AI
                </h1>
                <p>By harnessing the power of AI, you can quickly obtain answers to your questions related to YouTube videos. The AI system uses advanced techniques to analyze the content and generate corresponding responses, ensuring that you receive accurate and relevant information.</p>
            </div>
            <div className="work-img">
                <h1 className='work-imgp'>WorkFlow</h1>
                <video className='work-video' autoPlay={true} muted loop playsInline>
                    <source src="tutovideo.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Workflow