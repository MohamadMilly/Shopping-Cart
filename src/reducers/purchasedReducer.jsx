export default function purchasedReducer(state, action) {
  switch (action.type) {
    case "add_item": {
      return [
        ...state,
        {
          ...action.product,
          amount: action.amount,
        },
      ];
    }
    case "incremeant_purchased_by_one": {
      return state.map((purchased) => {
        if (purchased.id === action.id) {
          return {
            ...purchased,
            amount: purchased.amount + 1,
          };
        } else {
          return purchased;
        }
      });
    }
    case "decremeant_purchased_by_one": {
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        } else {
          return item;
        }
      });
    }
    case "unpurchased-item": {
      return state.filter((item) => item.id !== action.id);
    }
  }
}
