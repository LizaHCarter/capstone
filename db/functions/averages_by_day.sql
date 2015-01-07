create or replace function averages_by_day (uid integer)
returns table (avg_tips_day numeric, avg_sales_day numeric, day varchar(25)) AS $$
declare
begin

    return query
    select avg(t.tip::decimal) as avg_tips_day, avg(t.sales::decimal) as avg_sales_day, t.day
    from tips t
    inner join expenses e on e.user_id = t.user_id
    where t.user_id = uid
    group by t.day;

end;
$$ language plpgsql;