import React from 'react';

const Section = () => {
      let imgStyle={
        width: "150px",
          paddingInline: "7%",
        
    }
    return (
      
        <div>
            <h2 style={{ textAlign: 'center', color: 'darkblue' }}>A little about our studies</h2>
            <img style={{width:'150px',paddingLeft:'9%',paddingRight:"7%"}} src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700034-icon-76-document-file-html-512.png" alt="" />
            <img style={imgStyle} src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700035-icon-77-document-file-css-256.png" alt="" />
            <img style={imgStyle} src="https://cdn1.iconfinder.com/data/icons/buno-files/32/__js_file_javascript-256.png" alt="" />
            <img style={imgStyle} src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-256.png" alt="" />
            <p style={{ textAlign: 'center', color:'darkblue',margin:'50px',paddingInline:'6%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum recusandae nulla corrupti aut reiciendis, nihil delectus odit, dicta perspiciatis fuga repellat! Necessitatibus, similique minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nostrum autem itaque aliquid, explicabo perferendis voluptatum error nisi eaque expedita nemo voluptatibus? Saepe obcaecati vitae nostrum ullam commodi tempora voluptatem cumque nihil laborum assumenda aliquam deserunt fuga accusantium ex, quam reprehenderit excepturi officiis et iusto vel sed nesciunt. Dicta, eligendi. Cum fugit pariatur est adipisci quaerat ab sequi suscipit vel, veniam optio dolor eaque alias nisi corrupti laudantium minima accusantium. Est accusantium eius laborum architecto.
            </p>
        </div>

    );
};

export default Section;