-- with "cte_profit" as (
--   select "films"."filmId",
--          "films"."replacementCost" as "cost",
--          sum("payments"."amount") as "revenue",
--          sum("payments"."amount") - "films"."replacementCost" as "profit",
--          count("payments"."amount") as "rentals"
--       from "films"
--       join "inventory" using ("filmId")
--       join "rentals" using ("inventoryId")
--       join "payments" using ("rentalId")
--       group by "films"."filmId"
-- )
-- select "films"."title" as "film",
--        "cte_profit"."profit",
--        "cte_profit"."cost",
--        "cte_profit"."revenue",
--        "cte_profit"."rentals"
--     from "films"
--     join "cte_profit" using ("filmId")
--   order by "profit" desc
--   limit 5;

with "cteFilmCost" as (
  select "films"."filmId",
         sum("films"."replacementCost") as "totalCost",
         count("inventory"."inventoryId") as "totalCopies"
         from "films"
         join "inventory" using ("filmId")
        group by "films"."filmId"
),

"cteFilmRevenue" as (
  select "films"."filmId",
         sum("payments"."amount") as "revenue"
         from "films"
         join "inventory" using ("filmId")
         join "rentals" using ("inventoryId")
         join "payments" using ("rentalId")
        group by "films"."filmId"
)

select "films"."title",
       "films"."description",
       "films"."rating",
       "revenue" - "totalCost" as "profit"
       from "films"
       join "cteFilmCost" using ("filmId")
       join "cteFilmRevenue" using ("filmId")
      group by "films"."filmId"
      order by "profit" desc
      limit 5;
