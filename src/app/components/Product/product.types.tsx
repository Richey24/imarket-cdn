import PropTypes from "prop-types";

const ProductProps = {
     id: PropTypes.string.isRequired,
     imageSrc: PropTypes.string.isRequired,
     productName: PropTypes.string.isRequired,
     price: PropTypes.string.isRequired,
};

export { ProductProps };
