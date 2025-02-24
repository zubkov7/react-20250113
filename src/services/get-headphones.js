export const getHeadphones = async () => {
  const result = await fetch("http://localhost:3001/api/products", {
    next: { tags: ["getHeadphones"], revalidate: 300 },
    // cache: "force-cache",
  });

  return result.json();
};

// revalidateTag('getHeadphones');
// revalidatePath("heaphones");
