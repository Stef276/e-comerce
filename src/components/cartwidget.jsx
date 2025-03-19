function CartWidget() {
    return (
        <div style={{ position: 'relative' }}>
            <span role="img" aria-label="carrito" style={{ fontSize: '1.5rem' }}>🛒</span>
            <span style={{ position: 'absolute', top: '-5px', right: '-10px', backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>
                3
            </span>
        </div>
    );
}

export default CartWidget;
