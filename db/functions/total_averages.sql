create or replace function total_averages (uid integer)
returns table (user_id integer, avg_tip numeric, avg_sales numeric) AS $$
declare
begin

    return query
    select t.user_id, avg(t.tip::decimal) as avg_tip, avg(t.sales::decimal) as avg_sales
    from tips t
    inner join expenses e on e.user_id = t.user_id
    where t.user_id = uid
    group by t.user_id;


end;
$$ language plpgsql;