import { TechStackIcon } from "~/components";
import { techStackDictionary, techStackArr } from "~/data";

export const TechStack = () => {
  return (
    <section className="flex flex-col gap-y-4">
      {techStackArr.map((el) => (
        <div key={`tech-stack-arr-${el.label}`}>
          <p className="mb-3 text-base text-dracula-pink">{el.label}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-3">
            {el.items.map((key) => {
              const item = techStackDictionary[key];
              return (
                <TechStackIcon
                  key={`tech-stack-list-${item.label}`}
                  item={item}
                />
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};
