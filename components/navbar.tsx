import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'People', href: '#' },
  { name: 'Join Us', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5 ">
            <span className="sr-only">Your Company</span>
            <h1 className="text-2xl font-bold  sm:text-3xl sm:truncate">
              Very Dashing
            </h1>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        <div className="flex flex-1 justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent size="full">
              <SheetHeader className="space-y-12">
                {navigation.map((item) => (
                  <SheetTitle key={item.name} className="text-right mt-12">
                    <Link
                      href={item.href}
                      className="text-6xl font-semibold  sm:text-6xl sm:truncate text-black hover:text-black/80"
                    >
                      {item.name}
                    </Link>
                  </SheetTitle>
                ))}
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
