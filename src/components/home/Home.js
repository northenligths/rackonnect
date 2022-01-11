import React from "react";
import Product from "../product/Product";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        {/* Here we are passing different values to product component and rendering them */}
        <div className="home-row">
          <Product
            id="12321341"
            title="Class redefined:The room decor and palate are just right to make the bedspread pop! "
            price={11.96}
            rating={5}
            image="http://img1a.flixcart.com/fk-sp-static/21072015/mm104-cenizas-flat-mix-match-400x400-imae2eks3cbz2vh4.jpeg"
          />
          <Product
            id="49538094"
            title="Luxe is earned:The close-up shot of the watch shows the kind of precision it took to make this singular timepiece."
            price={239.0}
            rating={4}
            image="http://img1a.flixcart.com/fk-sp-static/21072015/prvigour011-preezon-400x400-imae4f3ydcqyt8tm.jpeg"
          />
        </div>

        <div className="home-row">
          <Product
            id="4903850"
            title="Bag it:Be wild, be crazy! The bag looks packed and ready!"
            price={199.99}
            rating={3}
            image="http://img1a.flixcart.com/fk-sp-static/21072015/wildcraft-rock-400x400-imad92693hkmdub9.jpeg"
          />
          <Product
            id="23445930"
            title="Food for your sole:Feed your feet to incomparable style. This image of the blue leather shoes is a visual treat. The play of light and shadows is used to highlight the hue of the shoe to perfection. "
            price={98.99}
            rating={5}
            image="http://img1a.flixcart.com/fk-sp-static/21072015/blue-24744-yepme-8-400x400-imadqtjww8cwpthg.jpeg"
          />
          <Product
            id="3254354345"
            title="Phone covers:The blue cover set against the green phone and the other without makes for a delicious combination that is hard to resist. "
            price={598.99}
            rating={4}
            image="http://img1a.flixcart.com/fk-sp-static/21072015/kolorfish-isimple-dots-silicone-back-iphone-5c-400x400-imadu4ynwhce4rzq.jpeg"
          />
        </div>

        <div className="home-row">
          <Product
            id="90829332"
            title="Tote your style:All the essential features are clearly visible in this picture: the pretty metallic butterfly chain hanging from the side, the colour, the buckles and the size. There would be no confusion in the customer’s mind when she picks up this product. "
            price={1094.98}
            rating={4}
            image="http://img1a.flixcart.com/fk-sp-static/21072015/bns-0356pk-butterflies-hand-held-bag-trendy-400x400-imadzvfz97qhy7er.jpeg"
          />
        </div>
      </div>
    </div>
  );
}
