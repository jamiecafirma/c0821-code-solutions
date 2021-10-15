select "customers"."firstName",
       "customers"."lastName",
       sum("payments"."amount") as "rentalTotal"
    from "customers"
    join "payments" using ("customerId")
  group by "customers"."customerId"
  order by "rentalTotal" desc;
