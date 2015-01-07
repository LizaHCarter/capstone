create or replace function progress_to_goals (uid integer)
returns table (user_id integer, sum money, percent text, total_expenses money, progress_to_rent_paid numeric, beer_money numeric) AS $$
declare
begin

    return query
        select t.user_id, sum(t.tip), min(e.percent) as percent, min(e.rent + e.groceries + e.utilities + e.savings + e.other) as total_expenses, (((sum(t.tip::decimal) * min(e.percent::decimal))/100)/(min(e.rent + e.groceries + e.utilities + e.savings + e.other)::decimal) * 100) as progress_to_rent_paid, (sum(t.tip::decimal) - (sum(t.tip::decimal) * (min(e.percent::decimal)/100))) as beer_money
        from tips t
        inner join expenses e on e.user_id = t.user_id
        where t.user_id = uid
        group by t.user_id;


end;
$$ language plpgsql;