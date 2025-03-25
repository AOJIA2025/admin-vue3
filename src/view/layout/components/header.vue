<template>
    <div>
        <t-head-menu default-value="2-1" expand-type="popup">
            <template #logo>

            </template>

            <template #operations>
                <t-button variant="text" shape="square">
                    <template #icon><t-icon name="user" /></template>
                </t-button>
                <t-button variant="text" shape="square">
                    <template #icon><t-icon name="ellipsis" /></template>
                </t-button>
            </template>
        </t-head-menu>
    </div>
</template>