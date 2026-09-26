import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
  { label: "About", href: "/#about" },
];

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            aria-label="Toggle Navigation"
            className="flex flex-col gap-2 w-max sticky top-2 ml-auto transition-all duration-300 ease-in-out"
          >
            <span className="block h-0.5 w-7 bg-chart-5/60"></span>
            <span className="block h-0.5 w-7 bg-chart-5/60"></span>
            <span className="block h-0.5 w-7 bg-chart-5/60"></span>
          </Button>
        }
      />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2 ml-4">
          {navItems.map((item) => (
            <SheetClose
              nativeButton={false}
              render={
                <a
                  key={item.href}
                  className="text-lg text-chart-5"
                  href={item.href}
                >
                  {item.label}
                </a>
              }
              key={item.href}
            />
          ))}
        </nav>

        <SheetFooter>
          <SheetClose render={<Button variant="outline">Close</Button>} />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

function NavLinks() {
  return (
    <>
      {navItems.map((item) => (
        <NavigationMenuItem key={item.href}>
          <NavigationMenuLink
            render={
              <a href={item.href} className="text-lg">
                {item.label}
              </a>
            }
          />
        </NavigationMenuItem>
      ))}
    </>
  );
}

function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavLinks />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default function Navbar() {
  return (
    <div>
      <div className="flex md:hidden ">
        <MobileNav />
      </div>
      <div className="hidden md:flex">
        <DesktopNav />
      </div>
    </div>
  );
}
