import { ModeToggle } from './theme-toggle-button';
import Link from "next/link";
import { buttonVariants } from './ui/button';
function NavBar() {
  return (
    <nav className="flex justify-between pt-10">
      <Link href='/'>
      <h1 className="text-3x1 font-bold text-gray-800 dark:text-gray-100">NextActionsCRUD</h1>
      </Link>
      <div className='flex gap-x-2 items-start'>
          <Link href='/new' className={buttonVariants({variant:"secondary"})}>Create Task</Link>
          <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
}

export default NavBar;