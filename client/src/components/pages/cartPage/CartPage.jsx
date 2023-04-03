import "./CartPage.scss";
import { ProductCardItem } from "../../../components/productCartItem/ProductCartIem";
import { useState, useContext, useEffect } from "react";
import { LocalStorageContext } from "../../app/App";
import { Button } from "../../button/Button";

export function CartPage() {
  const { store, updateStore } = useContext(LocalStorageContext);
  const [total, setTotal] = useState(null);

  const findProductInStore = (productId) =>
    store?.products.find((item) => item.id === productId);

  const updateOrderQuantity = (id, quantity) => {
    findProductInStore(id).quantity = quantity;
    localStorage.setItem("order", JSON.stringify(store));
    updateStore();
  };
  const deleteOrderProduct = (id) => {
    const products = store?.products.filter((item) => item.id !== id);
    localStorage.setItem("order", JSON.stringify({ products }));
    updateStore();
  };
  useEffect(() => {
    const totalOrderSum = store?.products.reduce(
      (total, item) => {
        const { quantity, discountPrice, discountSum } = item;
        return {
          ...total,
          totalSum: total.totalSum + quantity * discountPrice,
          totalDiscount: total.totalDiscount + quantity * discountSum,
        };
      },
      { totalSum: 0, totalDiscount: 0 }
    );
    setTotal(totalOrderSum);
  }, [store?.products]);

  return (
    <section className="cart">
      <div className="cart__title-block">
        <h1 className="cart__title">Cart</h1>
      </div>
      <div className="cart__main-block">
        <div className="cart__container">
          <div className="cart__order">
            <ul className="cart__order-list">
              {store
                ? store.products.map((product) =>(
                    <li className="cart__order-item" key={product.id}>
                        <ProductCardItem
                          {...product}
                          updateOrder={updateOrderQuantity}
                          deleteOrderProduct={deleteOrderProduct}
                        />
                      </li>
                ))
                : null}
            </ul>
            <div className="cart__total-block">
              <p className="cart__total-cost">
                Total Cost <span className="sum">{total?.totalSum}$</span>
              </p>
              <p className="cart__total-diacount">
                Discount <span className="sum">{total?.totalDiscount}$</span>
              </p>
            </div>
            <form className="cart__customer-form customer-form hidden">
              <div className="customer-form__row">
                <div className="customer-form__row-item">
                  <label htmlFor="name" className="cart__field-label">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="customer-form__field"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="customer-form__row-item">
                  <label htmlFor="email" className="cart__field-label">
                    Your Email*{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="customer-form__field"
                    placeholder="example@yourmail.com"
                    required
                  />
                </div>
              </div>
              <div className="customer-form__row">
                <div className="customer-form__row-item">
                  <label htmlFor="address" className="cart__field-label">
                    Address*
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="customer-form__field"
                    placeholder="your company  address"
                    required
                  />
                </div>
                <div className="customer-form__row-item">
                  <label htmlFor="phone" className="cart__field-label">
                    Phone number*{" "}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="customer-form__field"
                    placeholder="Enter your phone"
                    required
                  />
                </div>
              </div>
              <label className="cart__field-label">
                Message
                <textarea
                  placeholder="some extra information"
                  className="customer-form__field message-field"
                ></textarea>
              </label>
            </form>
            <Button className="dark-btn cart__btn" text="To order" icon />
          </div>
        </div>
      </div>
    </section>
  );
}
