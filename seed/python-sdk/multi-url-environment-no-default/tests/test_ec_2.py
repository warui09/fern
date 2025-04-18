# This file was auto-generated by Fern from our API Definition.

from seed import SeedMultiUrlEnvironmentNoDefault
from seed import AsyncSeedMultiUrlEnvironmentNoDefault


async def test_boot_instance(
    client: SeedMultiUrlEnvironmentNoDefault,
    async_client: AsyncSeedMultiUrlEnvironmentNoDefault,
) -> None:
    # Type ignore to avoid mypy complaining about the function not being meant to return a value
    assert (
        client.ec_2.boot_instance(size="size")  # type: ignore[func-returns-value]
        is None
    )

    assert (
        await async_client.ec_2.boot_instance(size="size")  # type: ignore[func-returns-value]
        is None
    )
