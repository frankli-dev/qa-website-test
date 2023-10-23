const convertdate = (date: Date) =>
    date
        .toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
        .replace(",", "");

export { convertdate };
