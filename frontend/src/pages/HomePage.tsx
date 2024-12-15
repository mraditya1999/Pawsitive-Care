import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { increment, decrement } from '../redux/slices/counterSlice';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <div className='bg-green-200'>
      <h1 className='text-3xl'>Home Page</h1>
      <Button>Click me</Button>
      <div>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <span>{counter}</span>
        <Button onClick={() => dispatch(increment())}>+</Button>
      </div>
    </div>
  );
};

export default HomePage;
