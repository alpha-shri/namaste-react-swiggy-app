import React from "react";

const CartItem = (props) => {
  const { id, name, cuisine, image, reviewCount } = props.cartItem ?? [];

  return (
    <div class="mt-8" key={id}>
      <div class="flow-root">
        <ul role="list" class="-my-6 divide-y divide-gray-200">
          <li class="flex py-6">
            <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={image}
                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                class="size-full object-cover"
              />
            </div>

            <div class="ml-4 flex flex-1 flex-col">
              <div>
                <div class="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a href="#">{name}</a>
                  </h3>
                  <p class="ml-4">₹{reviewCount}</p>
                </div>
                <p class="mt-1 text-sm text-gray-500">{cuisine}</p>
              </div>
              <div class="flex flex-1 items-end justify-between text-sm">
                <p class="text-gray-500">Qty 1</p>

                <div class="flex">
                  <button
                    type="button"
                    class="font-medium cursor-pointer text-indigo-600 hover:text-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartItem;
