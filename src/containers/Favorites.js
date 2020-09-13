import React, {useContext} from 'react';
import {ProductsContext} from '../context/products-context';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

const Favorites = props => {
    const favoriteProducts = useContext(ProductsContext).products.filter(p => p.isFavorite);
    return favoriteProducts.length > 0
        ? <ul className="products-list">
            {favoriteProducts.map(prod => (
                <FavoriteItem
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    description={prod.description}
                />
            ))}
        </ul>
        : <p className="placeholder">Got no favorites yet!</p>;
};

export default Favorites;
