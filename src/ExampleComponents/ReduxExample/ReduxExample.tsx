import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export default function ReduxExample() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="bg-card border rounded-lg p-6 shadow-sm space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Redux Counter
          </h2>
          <div className="text-4xl font-bold text-primary">{count}</div>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
          >
            -
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
          >
            +
          </button>
        </div>

        <div className="flex gap-2 justify-center">
          <button
            onClick={() => dispatch(incrementByAmount(-5))}
            className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
          >
            -5
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
          >
            +5
          </button>
        </div>
      </div>
    </div>
  );
}
