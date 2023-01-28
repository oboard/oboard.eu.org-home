import Link from "next/link";

export type NavItem = {
  title: string;
  path: string;
  children: Array<NavItem>;
};

export declare type CustomProps = {
  navigationTree: Array<NavItem>;
};

export const AppNavigation = (props: CustomProps) => {
  const { navigationTree } = props;
  return (
    <>
      {navigationTree.map((item: NavItem, index) => (
        <div key={index}>
          {item.children ? (
            <div className="border-l border-l-primary pl-4 mt-4">
              {item.title}
              <div className="mt-2">
                {AppNavigation({ navigationTree: item.children })}
              </div>
            </div>
          ) : (
            <li
              v-else
              className={
                item.title === item.path
                  ? "btn-primary rounded-lg mb-1"
                  : "mb-1"
              }
              key={index}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          )}
        </div>
      ))}
    </>
  );
};
