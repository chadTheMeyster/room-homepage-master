export function DesktopNavigation() {
  const navigationTags = ["home", "shop", "about", "contact"];

  return (
    <>
      {navigationTags.map((navigationTag) => {
        return (
          <a
            href="#"
            className="relative
              after:absolute after:h-0.5 after:w-6 after:bg-white after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:opacity-0 hover:after:opacity-100
          active:after:opacity-100"
          >
            {navigationTag}
          </a>
        );
      })}
    </>
  );
}
