import React, { useEffect, useState } from "react";
import NextImage from "next/image";

interface ProductData {
  imageUrl1: string;
  imageUrl2: string;
  altText: string;
  category: string;
  productName: string;
  ratings: number;
  oldPrice: number;
  productPrice: number;
}

interface FeaturedProductsSectionProps {
  products: ProductData[];
}

const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({ products }) => {
  const [imageWidths, setImageWidths] = useState<number[]>([]);

  useEffect(() => {
    const fetchImageWidths = async () => {
      const widths: number[] = [];
      for (const product of products) {
        try {
          const img1 = new Image();
          img1.src = product.imageUrl1;
          await img1.decode();
          const img2 = new Image();
          img2.src = product.imageUrl2;
          await img2.decode();
          const maxWidth = Math.max(img1.width, img2.width);
          widths.push(maxWidth);
        } catch (error) {
          console.error("Error loading image:", error);
          widths.push(280); // Use a default width if the image fails to load
        }
      }
      setImageWidths(widths);
    };
    fetchImageWidths();
  }, [products]);

  return (
    <section className="featured-products-section">
      <div className="container">
        <h2 className="section-title heading-border ls-20 border-0">Featured Products</h2>
        <div
          className="products-slider custom-products owl-carousel owl-theme nav-outer show-nav-hover nav-image-center"
          data-owl-options='{"dots": false, "nav": true}'
        >
          {products.map((product, index) => (
            <div className="product-default" data-animation-name="fadeInRightShorter" key={index}>
              <figure>
                <a href="product.html">
                  <NextImage
                    src={product.imageUrl1}
                    width={imageWidths[index] || 280}
                    height={280}
                    alt={product.altText}
                  />
                  <NextImage
                    src={product.imageUrl2}
                    width={imageWidths[index] || 280}
                    height={280}
                    alt={product.altText}
                  />
                </a>
                <div className="label-group">
                  <div className="product-label label-hot">HOT</div>
                  <div className="product-label label-sale">-20%</div>
                </div>
              </figure>
              <div className="product-details">
                <div className="category-list">
                  <a href="category.html" className="product-category">
                    {product.category}
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">{product.productName}</a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: product.ratings + "%" }} />
                    <span className="tooltiptext tooltip-top" />
                  </div>
                </div>
                <div className="price-box">
                  <del className="old-price">${product.oldPrice.toFixed(2)}</del>
                  <span className="product-price">${product.productPrice.toFixed(2)}</span>
                </div>
                <div className="product-action">
                  <a href="wishlist.html" className="btn-icon-wish" title="wishlist">
                    <i className="icon-heart" />
                  </a>
                  <a href="product.html" className="btn-icon btn-add-cart">
                    <i className="fa fa-arrow-right" />
                    <span>SELECT OPTIONS</span>
                  </a>
                  <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">
                    <i className="fas fa-external-link-alt" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
