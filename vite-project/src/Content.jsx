function Content(){
    return (
     <div>
     <div className="box1" style={{height:"500px",width:"45%",position:"fixed",borderRight:"1px solid black "}}> 
    <img style={{marginTop:"8%",marginLeft:"25%"}}
    src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=[640,775]&w=1280&h=670&url=https://static.onecms.io/wp-content/uploads/sites/37/2020/01/indoor-potted-houseplants-703b321a.jpg" height={"400px"} width={"50%"} alt="" />
    </div>
    
    <div className="box2" style={{backgroundColor:"",height:"500px",width:"50%",position:"absolute",left:"50%"}}>
      <h1 style={{fontFamily:"Arial"}}>CLASSIC PEACE lILLY</h1>
      <h3 style={{fontFamily:"arial"}}>Popular House Plant</h3>
      <h2>$18</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestiae laborum natus eum repellat, vel fugit. Illum veniam possimus esse at cumque neque porro repudiandae ut a, totam, amet facere!</p>
      <button className="btn  btn-primary" style={{border:"1px solid black",height:"40px",width:"120px",borderRadius:"10px",}}>Add To Cart</button>
       <button style={{border:"1px solid black",backgroundColor:"white",height:"40px",width:"120px",marginLeft:"5%",borderRadius:"10px"}}>Wishlist</button>
    </div></div>
    )
}
export default Content;