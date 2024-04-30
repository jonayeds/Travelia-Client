import Marquee from "react-fast-marquee";
const Sponsors = () => {
    const realtors = [
        {name: 'CocaCola',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png'},
        {name: 'Decathlon',
        image: 'https://logos-world.net/wp-content/uploads/2020/01/Decathlon-Logo.jpg'},
        {name: 'yatra',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Yatra_logo.svg/1200px-Yatra_logo.svg.png'},
        {name: 'puma',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Puma-Logo.png'},
        {name: 'samsung',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Samsung_logo_blue.png'},
        {name: 'amazon',
        image: 'https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png'},
        
    ]

    // console.log(realtors);/
    return (
      <div className="my-20 ">
          <h1 className="heading text-6xl text-center my-4">Our Sponsors</h1>
          
        <Marquee>
          {realtors.map((sponsors) => (
            <div
              key={sponsors.name}
              className="mx-10"
            >
              <div>
                <img src={sponsors.image} className="w-52" alt="" />
              </div>
              
              
            </div>
          ))}
        </Marquee>
      </div>
    );
  };

export default Sponsors;