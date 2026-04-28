import Link from "next/link";

 export type Categorytype = {
  _id: string;
  name: string;
  image: string;
};

export default function CategoryCard({ category }: { category: Categorytype }) {
  return (
    <>
      <Link
        href={`/categories/${category._id}`}
        className="cat-card"
        style={{
          background: "white",
          borderRadius: "16px",
          border: "1px solid #f3f4f6",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          textDecoration: "none",
        }}
      >
        <div
          style={{
            aspectRatio: "1 / 1",
            borderRadius: "12px",
            overflow: "hidden",
            background: "#f9fafb",
            marginBottom: "16px",
          }}
        >
          <img
            src={category.image}
            alt={category.name}
            className="cat-img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <h3
            className="cat-title"
            style={{
              fontWeight: "bold",
              color: "#111827",
              transition: "color 0.3s",
            }}
          >
            {category.name}
          </h3>

          <div
            className="cat-arrow"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "8px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                color: "#16a34a",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontWeight: 500,
              }}
            >
              View Subcategories →
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
