select "addresses"."line1" as "address",
       "cities"."name" as "city",
       "addresses"."district",
       "countries"."name"
    from "addresses"
    join "cities" using ("cityId")
    join "countries" using ("countryId")
